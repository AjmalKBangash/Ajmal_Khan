import "./Proxyservers.css";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { useNavigate } from "react-router-dom";
import CodeBlock from "./CodeBlock";
function Proxyservers() {
  const navigate = useNavigate();
  return (
    <>
      <div className="blog-background">
        <Navbar />
        <div className="home-container" style={{ width: "80%" }}>
          <div className="blog">
            <h1 style={{ textAlign: "center" }}>PROXY SERVERS</h1>
            <img
              src="/images/Proxyserver02.jpeg"
              alt="proxy servers"
              className="blog-img"
            />
            <br />
            <h3 style={{ textAlign: "center" }}>
              Proxy Servers in Software Deployment
            </h3>
            <br />
            <div>What is Proxy Servers ?</div>
            <div>Reverse Proxy ?</div>
            <div>Why do we need Proxy Servers ?</div>
            <div>Why do we need Proxy Servers for Software Deployment</div>
            <div>How to use it ?</div>
            <div>When to use it ?</div>
            <div>Where to use it ?</div>
            <br />
            <p>
              "We have wrote a unique and innovative blog to address all your
              queries regarding proxy servers and their significance in software
              deployment."
            </p>
            <br />
            <br />
            <h4>Introduction to Proxy Servers</h4>
            <p>
              A proxy server acts as an intermediary between a client (such as a
              web browser) and another server (such as a website). When a client
              makes a request for a resource (like a web page or a file), it
              sends the request to the proxy server instead of directly to the
              destination server. The proxy server then evaluates the request
              and either fulfills it by fetching the requested resource from the
              destination server, or it forwards the request on behalf of the
              client.
            </p>
            <br />
            <br />
            <br />
            <h4>Why do we need Proxy Servers ?</h4>
            <p>
              The need for Proxy Servers is wide spread and innovative in some
              cases with the modern way of Software Development and it
              Deployment. One of the main reasons why do we need it is for..
            </p>
            <br />
            <h4>Anonymity:</h4>
            <p>
              Proxy servers can mask the IP address of the client, making it
              appear as if the request is coming from the proxy server rather
              than the client itself. This can help protect the privacy and
              anonymity of the client.
            </p>
            <br />
            <h4>SSL Termination:</h4>
            <p>
              Proxy Servers(Reverse proxies) can handle SSL/TLS encryption and
              decryption, offloading this resource-intensive task from backend
              servers.
            </p>
            <br />
            <h4>Content Filtering:</h4>
            <p>
              Proxy servers can be used to filter or block access to certain
              websites or content based on predefined rules. This is often
              implemented in corporate networks or educational institutions to
              restrict access to inappropriate or non-work-related websites.
            </p>
            <br />
            <h4>Access Control:</h4>
            <p>
              Proxy servers can enforce access control policies, allowing or
              denying access to certain resources based on factors such as IP
              address, authentication credentials, or user permissions.
              <br /> One Example is: When Software Engineers are developing a
              software but the Software is not been completed and the working is
              continued we need to deploy it for daily updating code to show the
              client the daily work and progress the Software Engineers are
              making. And only let authorized users.
            </p>
            <br />
            <h4>Security:</h4>
            <p>
              Proxy servers can provide an additional layer of security by
              acting as a barrier between the client and the internet. They can
              inspect incoming and outgoing traffic for malware, viruses, or
              other malicious content, and block or quarantine it before it
              reaches the client.
            </p>
            <br />
            <h4>Reverse Proxy:</h4>
            <p>
              A reverse proxy is a type of proxy server that sits between
              clients and backend servers, acting as an intermediary for
              incoming client requests. Unlike a forward proxy, which handles
              requests from clients to the internet, a reverse proxy manages
              requests from clients to servers within a private network.
            </p>
            <br />
            <h1 style={{ textAlign: "center", fontSize: "22px" }}>
              The use of Proxy Servers in Software Deployment!
            </h1>
            <p>
              Here's how a reverse proxy works when deploying Software pieces:{" "}
            </p>
            <br />
            <p>
              When we have prepared our frontend app with javascript and backend
              app with python and we have only one domain and one server for
              these two separate applications then how to deploy it on one
              server we need to configure Proxy Web Servers like Nginx or Apche
              for serving both these two seprate softwares.
            </p>
            <br />
            <br />
            <p>
              Here we will use Nginx as our Reverse Proxy Web Server, we need to
              configure Nginx for serving for static(frontend) and business
              logic(backend) files. When client made a request to our Domain the
              Nginx will intercept the request and forwards it to the frontend
              application and from the frontend request we will forward that
              requests to the backend rest apis for serving content from the
              backend to the frontend for clients. Here is its simple
              configuraton:
            </p>
            <br />
            <p>
              .. Navigate to Nginx's configuration directory (commonly located
              at /etc/nginx/sites-available/ or /etc/nginx/conf.d/).
              <br /> .. Create a new configuration file (e.g., yourapp.conf).
              <br /> .. Add configuration blocks for both Django and React apps.
            </p>
            <CodeBlock
              language="nginx"
              code={`server {
    listen 80;
    server_name your_domain.com;

    # Serve React static files
    location / {
        root /path/to/your/react/app/build;
        try_files $uri $uri/ /index.html;
    }

    # Proxy requests to Django backend
    location /api/ {
        proxy_pass http://127.0.0.1:8000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    # Additional configurations as needed
}
`}
            />
            <br />
            <h4>1.. Test and activate configuration:</h4>
            <p>
              .. Test the Nginx configuration for syntax errors: sudo nginx -t.
              <br />
              .. If the test is successful, reload Nginx: sudo systemctl reload
              nginx (or sudo service nginx reload depending on your system).
            </p>
            <br />
            <h4>2.. DNS Configuration:</h4>
            <p>.. Ensure your domain is pointed to the server's IP address.</p>
            <br />
            <h4>3.. Firewall Configuration (if needed):</h4>
            <p>.. Open port 80 (HTTP) on your server's firewall.</p>
            <br />
            <br />
            <br />
            <h4>(1) Client sends a request:</h4>
            <p>
              A client, such as a web browser, sends a request for a resource
              (e.g., a web page) to the reverse proxy server.
            </p>
            <br /> <h4>(2) Reverse proxy intercepts the request:</h4>
            <p>
              The reverse proxy server intercepts the client request before it
              reaches the backend servers. And forwards that request to the any
              backend apis server..
            </p>
            <br /> <h4>(3) Determines the appropriate backend server:</h4>
            <p>
              The reverse proxy examines the request and determines which
              backend server or servers should handle it. This decision could be
              based on various factors such as load balancing algorithms,
              content-based routing, or server health checks.
            </p>
            <br /> <h4>(4) Forwards the request to the backend server:</h4>
            <p>
              Once the reverse proxy has determined the appropriate backend
              server, it forwards the client request to that server.
            </p>
            <br /> <h4>(5) Receives response from the backend server:</h4>
            <p>
              The backend server processes the request and generates a response,
              which is sent back to the reverse proxy.
            </p>
            <br /> <h4>(6) Returns response to the client:</h4>
            <p>
              The reverse proxy receives the response from the backend server
              and forwards it back to the client.
            </p>
            <br />
            <p>
              This is how Proxy Servers works and how it is forwarding requests
              through Reverse Proxiying within same server with the same domain
              but serving different softwares.
            </p>
            <br />
            <div className="contacting-me-div">
              If you are curious and frustrated in your decoupled architecture
              software deployment, Do{" "}
              <span
                className="contact-me-in-blog"
                onClick={() => navigate("/")}
              >
                contact me
              </span>{" "}
              for a better{" "}
              <span className="career-coun-word">Softwares Deployment</span>{" "}
              with modern and innovative techniques with Proxy Servers.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Proxyservers;
