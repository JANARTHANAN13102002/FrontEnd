/*

Class: http.Agent
-----------------

    new Agent([options])
    ---------------------
            * keepAlive ---> Keep sockets around even when there are no outstanding requests, so they can be used for future requests without having to reestablish a TCP connection.
            * maxSockets ---> Maximum number of sockets to allow per host. If the same host opens multiple concurrent connections, each request will use new socket until the maxSockets value is reached.
            * maxTotalSockets --->  Maximum number of sockets allowed for all hosts in total. Each request will use a new socket until the maximum is reached. Default: Infinity.
            * maxFreeSockets ---> Maximum number of sockets per host to leave open in a free state. Only relevant if keepAlive is set to true. Default: 256.
            * scheduling ---> Lifo -->selects the most recently used socket
                    |----> Fifo --> selects the least recently used socket
            Lifo ---> In case of a low rate of request per second, the 'lifo' scheduling will lower the risk of picking a socket that might have been closed by the server due to inactivity. 
            Fifo ---> In case of a high rate of request per second, the 'fifo' scheduling will maximize the number of open sockets, while the 'lifo' scheduling will keep it as low as possible. Default: 'lifo'.


    agent.createConnection(options[, callback])
    -------------------------------------------
            * options <Object> Options containing connection details. Check net.createConnection() for the format of the options
            * callback <Function> Callback function that receives the created socket
            * Returns: <stream.Duplex>


    agent.keepSocketAlive(socket)
    -----------------------------
            * Socket --> two-way communication between a user’s browser and the server. It establishes a continuous connection, enabling messages to be sent between the web server and browser at any time.
            * it will called when the is socket is detached from a request and could be persisted(to continue something even its wrong) by the agent
            * This method can be overridden by a particular Agent subclass. 
            * If this method returns a falsy value, the socket will be destroyed instead of persisting it for use with the next request.
            
            
    agent.reuseSocket(socket, request)
    ----------------------------------
            * Socket
            * request
            * can be called when socket is attached to request after being persisted because of th ekeep-alive options.

    agent.destroy()
    ---------------
            * Destroy any sockets that are currently in use by the agent.
            * It is usually not necessary to do this. However, if using an agent with keepAlive enabled, 
                then it is best to explicitly shut down the agent when it is no longer needed. 
                Otherwise, sockets might stay open for quite a long time before the server terminates them.

    agent.freeSockets
    -----------------
            * An object which contains arrays of sockets currently awaiting use by the agent when keepAlive is enabled. Do not modify.
            * Sockets in the freeSockets list will be automatically destroyed and removed from the array on 'timeout'.

    agent.getName([options])
    ------------------------
            * options <Object> A set of options providing information for name generation
                    * host <string> A domain name or IP address of the server to issue the request to
                    * port <number> Port of remote server
                    * localAddress <string> Local interface to bind for network connections when issuing the request
                    * family <integer> Must be 4 or 6 if this doesn't equal undefined.
            * Returns: <string>


    agent.maxFreeSockets
    --------------------
            * By default set to 256. For agents with keepAlive enabled, this sets the maximum number of sockets that will be left open in the free state.

    agent.maxSockets
    ----------------
            * By default set to Infinity. Determines how many concurrent sockets the agent can have open per origin. Origin is the returned value of agent.getName().

    agent.maxTotalSockets
    ---------------------
            * By default set to Infinity. Determines how many concurrent sockets the agent can have open. Unlike maxSockets, this parameter applies across all origins.

    agent.requests
    --------------
            * An object which contains queues of requests that have not yet been assigned to sockets. Do not modify.

    agent.sockets
    -------------
            * An object which contains arrays of sockets currently in use by the agent. Do not modify.





Class: http.ClientRequest
-------------------------
        * object is created internally and return fromm htt request. 
        * represents an in-progress request whose header is already been queued
        * header is still mutable using setHeader(name,value), getHeader(name), removeHeader(name).
        * Header will be sent along with the first data  chunk or when callign request.end()
        
        * add a listener for 'response' to the request object
        * 'response' will be emitted from the request object when the response headers have been received.
        * 'response' event is executed with one argument which is an instance of http.IncomingMessage.
        * During the 'response' event, one can add listeners to the response object; particularly to listen for the 'data' event.
        * If no 'response' handler is added, then the response will be entirely discarded. 
        
        
        * Set Content-Length header to limit the response body size. 
          If response.strictContentLength is set to true, mismatching the Content-Length header value will result in an Error being thrown, identified by code: 'ERR_HTTP_CONTENT_LENGTH_MISMATCH'.
          Content-Length value should be in bytes, not characters. Use Buffer.byteLength() to determine the length of the body in bytes.
        

    Event: 'abort'
    -------------
            * Emitted when the request has been aborted by the client. This event is only emitted on the first call to abort().

    Event: 'close'
    --------------
            * Indicates that the request is completed, or its underlying connection was terminated prematurely (before the response completion).

    Event: 'connect'
    ----------------
        * const http = require('node:http');
            const net = require('node:net');
            const { URL } = require('node:url');
            const proxy = http.createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('okay');
            });
            proxy.on('connect', (req, clientSocket, head) => {
            const { port, hostname } = new URL(`http://${req.url}`);
            const serverSocket = net.connect(port || 80, hostname, () => {
                clientSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                                'Proxy-agent: Node.js-Proxy\r\n' +
                                '\r\n');
                serverSocket.write(head);
                serverSocket.pipe(clientSocket);
                clientSocket.pipe(serverSocket);
            });
            });

            proxy.listen(1337, '127.0.0.1', () => {

            const options = {
                port: 1337,
                host: '127.0.0.1',
                method: 'CONNECT',
                path: 'www.google.com:80',
            };

            const req = http.request(options);
            req.end();

            req.on('connect', (res, socket, head) => {
                console.log('got connected!');

                socket.write('GET / HTTP/1.1\r\n' +
                            'Host: www.google.com:80\r\n' +
                            'Connection: close\r\n' +
                            '\r\n');
                socket.on('data', (chunk) => {
                console.log(chunk.toString());
                });
                socket.on('end', () => {
                proxy.close();
                });
            });
            });

    
    Event: 'continue'
    -----------------
        * Emitted when the server sends a '100 Continue' HTTP response, usually because the request contained 'Expect: 100-continue'. This is an instruction that the client should send the request body.

    
    Event: 'finish'
    ---------------
        * Emitted when the request has been sent. More specifically, this event is emitted when the last segment of the response headers and body have been handed off to the operating system for transmission over the network. It does not imply that the server has received anything yet.

    Event: 'information'
    -------------------
        * info <Object>
            httpVersion <string>
            httpVersionMajor <integer>
            httpVersionMinor <integer>
            statusCode <integer>
            statusMessage <string>
            headers <Object>
            rawHeaders <string[]>
        * Emitted when the server sends a 1xx intermediate response (excluding 101 Upgrade). The listeners of this event will receive an object containing the HTTP version, status code, status message, key-value headers object, and array with the raw header names followed by their respective values.
    
    // Example :  
        const http = require('node:http');
        const options = {
        host: '127.0.0.1',
        port: 8080,
        path: '/length_request',
        };

        // Make a request
        const req = http.request(options);
        req.end();

        req.on('information', (info) => {
        console.log(`Got information prior to main response: ${info.statusCode}`);
        });


    Event: 'response'
    -----------------
        * Emitted when a response is received to this request. This event is emitted only once.

    Event: 'timeout'
    ---------------
        * Emitted when the underlying socket times out from inactivity. This only notifies that the socket has been idle. The request must be destroyed manually.


        */

