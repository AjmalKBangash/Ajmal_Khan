import "./Decouplingarchitecture.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import CodeBlock from "./CodeBlock";
function Decouplingarchitecture() {
  const navigate = useNavigate();
  return (
    <>
      <div className="blog-background">
        <Navbar />
        <div className="home-container" style={{ width: "80%" }}>
          <div className="blog">
            <h1 style={{ textAlign: "center" }}>DECOUPLING ARCHITECTURE</h1>
            <img
              src="/images/decoup01.jpg"
              alt="decoupling architecture in IT"
              className="blog-img-decoup"
            />
            <br />
            <h3 style={{ textAlign: "center" }}>
              The concept of Decoupling Architecture in Web Applications and
              their Deployment
            </h3>
            {/* <h3>
              Counseling plays a more crucial role than attending university
              classes or taking online courses when dealing with distractions. A
              questions like,
            </h3> */}
            <br />
            <p>
              In this blog, we will delve into the concept of decoupled
              architecture in web applications. Firstly, we'll explore the
              traditional methods of Software Development Life Cycle (SDLC).
              Then, we'll discuss the modern approach to SDLC, focusing on its
              development and deployment phases. We'll provide a brief overview
              of frontend and backend components and their integration.
              Additionally, we'll explain how employing reverse proxy servers
              aids us in achieving our decoupled architecture deployment goals.
            </p>
            <br />
            <p>
              Additionally, we will touch upon the various technologies and
              teams involved in decoupled architecture. These include Frontend
              Technologies and Team, Backend Technologies and Team, and DevOps
              Engineers, techniques and tools. While delving into DevOps
              Engineering it will be beyond the scope of our blog, hence we will
              only focus on Decoupled Architecture Frontend and Backend
              integrations.
            </p>
            <br />
            <br />
            <h4>Introduction to Decoupling Architecture:</h4>
            <p>
              Decoupling, in the context of developing web or mobile
              applications, refers to the practice of separating different
              components of the software to enhance flexibility, scalability,
              and maintainability in a highly dynamic environment. This approach
              involves Frontend Engineers working independently on distinct
              parts of the application, which are later integrated using various
              concepts such as APIs. For instance, frontend components are
              integrated with the backend using REST APIs, enabling seamless
              communication between them. Additionally, techniques like
              Cross-Origin Resource Sharing (CORS) facilitate frontend requests
              to the backend. By decoupling components, each part assumes a
              distinct role, simplifying the software development lifecycle and
              making it more manageable amidst evolving requirements and
              technologies.
            </p>
            <br />
            <br />
            <br />
            <h4>
              Now, having covered the theoretical aspects, let's delve into the
              practical development, integration and deployment of web
              applications through the concept of Decoupled Architecture.
            </h4>
            <p>
              We will start by creating two separate environments for two
              separate applications{" "}
              <span
                onClick={() => {
                  window.open(
                    "https://legacy.reactjs.org/docs/getting-started.html",
                    "_blank"
                  );
                }}
                className="external-link"
              >
                React
              </span>{" "}
              and{" "}
              <span
                onClick={() => {
                  window.open(
                    "https://docs.djangoproject.com/en/5.0/",
                    "_blank"
                  );
                }}
                className="external-link"
              >
                Django
              </span>
              . As said React is the Javascript frontend library for creating
              interactive and modern way of UI/UX design. And Django is a
              high-level Python web framework that follows the
              Model-View-Controller (MVC) architectural pattern. Now we will go
              shortly through to create two apps,
            </p>
            <br />
            <h4>React Frontend App Creation</h4>
            <p>
              No need to worry, we'll create a straightforward static React app
              just to grasp the concept of decoupled architecture. First, ensure
              that Node.js is installed on your Linux machine. If it isn't, you
              can install it through the apt package manager in Debian-based
              Linux distributions. For Mac, Windows, and other Linux distros,
              you can follow a guide for installation.{" "}
              <span
                onClick={() => {
                  window.open("https://nodejs.org/en/download", "_blank");
                }}
                className="external-link"
              >
                Installing Node
              </span>
            </p>
            <br />
            <CodeBlock
              language="bash"
              code={`sudo apt update
              sudo apt install nodejs npm`}
            />
            <br />
            <p>
              Now Node.js is installed in your machine install the vite package
              through npm package manager in debian based linux distros.{" "}
            </p>
            <br />
            <CodeBlock language="bash" code={`npm install vite`} />
            <br />
            <p>
              Vite is also installed in your machine now we will go for the
              creation of the react app. Follow this guide for React app
              creation on different machines{" "}
              <span
                onClick={() => {
                  window.open("https://vitejs.dev/guide/", "_blank");
                }}
                className="external-link"
              >
                Creating React Apps through Vite
              </span>{" "}
              . In debian based linux distros{" "}
            </p>
            <br />
            <CodeBlock language="bash" code={`npm create vite@latest`} />
            <br />
            <p>it will prompt your with different libraries select react.js.</p>
            <br />
            <p>
              Now the react app should be created go inside the react app folder
              you have created in bash, run it through{" "}
            </p>
            <br />
            <CodeBlock language="bash" code={`npm start`} />
            <br />
            <p>
              Congratulations you have successfully created and started the
              react app, Now the react app will be running on your
              localhost:3000, if your localhost port 3000 is already running you
              can run react app with different port. Go to the browser and type{" "}
              <span style={{ color: "blue" }}>http://localhost:3000</span> your
              react app is running thats enough react frontend,
            </p>
            <br />
            <br />
            <br />
            <h4>Django Bacakend App Creation</h4>
            <p>
              Here, we will explore how to create a Django application equipped
              with a REST API, we will create a simplistic rest api on which you
              can grasp your understandings very easy. First ensure pip is
              nstalled in your machine if not, pip is the package installer for
              Python. It is used to install and manage Python packages
              (libraries and frameworks) that are available on the Python
              Package Index (PyPI) as well as other package repositories. PyPI
              is a repository of software for the Python programming language.
            </p>
            <br />
            <h4>Install pip</h4>
            <CodeBlock
              language="bash"
              code={`python get-pip.py
#OR
python3 get-pip.py`}
            />
            <br />
            <p>
              Verify installation, After the installation completes, you can
              verify that pip was installed correctly by running:
            </p>
            <br />
            <CodeBlock language="bash" code={`pip --version`} />
            <br />
            <p>
              Now e will turn back into django installation and app creation do
              it by,
            </p>
            <br />
            <CodeBlock language="bash" code={`npm install django`} />
            <br />
            <p>
              With Django installed, we're ready to kickstart our project.
              Navigate to your desired directory and execute the following
              command to create a new Django project:
            </p>
            <br />
            <CodeBlock
              language="bash"
              code={`django-admin startproject myproject`}
            />
            <br />
            <p>
              This command sets up the basic structure for your Django project.
              Navigate into the newly created directory:
            </p>{" "}
            <br />
            <CodeBlock language="bash" code={`cd myproject`} />
            <br />
            <p>
              Django apps allow you to organize your project's functionality
              into distinct components. Let's create our first app:
            </p>
            <br />
            <CodeBlock
              language="bash"
              code={`python mangae.py startapp myapp`}
            />
            <br />
            <p>
              This command generates the necessary files and folders for your
              Django app. Now, let's integrate this app into our project. Open
              settings.py in your project directory and add 'myapp' to the
              INSTALLED_APPS list.
            </p>
            <br />
            <CodeBlock
              language="python"
              code={`INSTALLED_APPS = [ ... 'myapp',]`}
            />
            <br />
            <h4>Setting up Models:</h4>
            <p>
              Models in Django represent the structure of your data. Define your
              models in models.py within your app directory ('myapp/models.py').
              Here's a simple example:
            </p>
            <br />
            <CodeBlock
              language="bash"
              code={`from django.db import models

class MyModel(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
`}
            />
            <br />
            <h4>creating View:</h4>
            <p>
              Views in Django handle the logic for processing user requests and
              returning responses. Create views in views.py within your app
              directory ('myapp/views.py'). For our REST API, we'll use Django
              Rest Framework (DRF) to simplify the process:
            </p>
            <br />
            <CodeBlock
              language="bash"
              code={`from rest_framework import viewsets
from .models import MyModel
from .serializers import MyModelSerializer

class MyModelViewSet(viewsets.ModelViewSet):
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer
`}
            />
            <br />
            <h4>Serializing Data:</h4>
            <p>
              Serializers translate complex data types into native Python data
              types that can be easily rendered into JSON/XML or other content
              types. Create a serializer in serializers.py within your app
              directory ('myapp/serializers.py'):
            </p>{" "}
            <br />
            <CodeBlock
              language="bash"
              code={`from rest_framework import serializers
from .models import MyModel

class MyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyModel
        fields = '__all__'
`}
            />
            <br />
            <h4>Configuring URLs:</h4>
            <p>
              Finally, configure your URLs to map requests to views. Open
              urls.py in your app directory ('myapp/urls.py') and define your
              URL patterns:
            </p>
            <br />
            <CodeBlock
              language="bash"
              code={`from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MyModelViewSet

router = DefaultRouter()
router.register(r'mymodels', MyModelViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
`}
            />
            <br />
            <h4>Running the server:</h4>
            <p>We're all set! Let's fire up the Django development server:</p>
            <CodeBlock language="bash" code={`python manage.py runserver`} />
            <br />
            <p>
              Navigate to http://127.0.0.1:8000 in your browser, and you should
              see your Django app up and running, equipped with a RESTful API
              ready to serve your data needs.
            </p>
            <br />
            <br />
            <h4>Front and Backend Integration</h4>
            <p>
              Now that we've initiated and developed two distinct applications
              with the assistance of separate development teams, this
              exemplifies the concept of decoupling. In this scenario, the
              frontend team has been tasked with the React app while the backend
              team has been responsible for the Django app, both of which are
              operational on different ports. Our next step involves linking
              these two applications using CORS (Cross-Origin Resource Sharing).
              We'll achieve this by sending an API request from the React app to
              the Django backend through the REST API we've just set up,
              utilizing the Axios library which is a popular JavaScript library
              used for making HTTP requests from web browsers and Node.js
              environments. In the context of React, Axios is commonly used for
              fetching data from APIs, submitting form data, and interacting
              with backend servers.
            </p>
            <br />
            <br />
            <h4>Conclusion</h4>
            <p>
              We have effectively demonstrated the concept of decoupling in web
              development. Decoupling architecture involves separating the
              frontend and backend components of an application, allowing them
              to operate independently while communicating through standardized
              interfaces such as APIs.
            </p>
            <br />
            <p>
              In our example, the React app serves as the frontend interface for
              users, providing a dynamic and interactive user experience.
              Meanwhile, the Django app functions as the backend server,
              handling data storage, retrieval, and business logic via a RESTful
              API.
            </p>
            <br />
            <p>This decoupled approach offers several benefits:</p>
            <br />
            <p>
              <ol>
                <li>
                  <b>Flexibility:</b>
                  Each component can be developed, tested, and scaled
                  independently, allowing for greater flexibility and agility in
                  the development process.
                </li>
                <li>
                  <b>Scalability:</b>
                  With a decoupled architecture, frontend and backend components
                  can be scaled horizontally or vertically based on demand,
                  ensuring optimal performance under varying loads.
                </li>
                <li>
                  <b>Maintainability:</b>
                  Decoupling simplifies maintenance tasks by isolating changes
                  and updates to specific components, reducing the risk of
                  unintended side effects.
                </li>
                <li>
                  <b>Interoperability:</b>
                  Standardized APIs facilitate interoperability between
                  different components and technologies, enabling seamless
                  integration with third-party services or future upgrades.
                </li>
              </ol>
            </p>{" "}
            <br />
            <br />
            <p>
              By embracing decoupling architecture, we empower ourselves to
              build robust, scalable, and maintainable web applications that can
              adapt and evolve over time to meet changing requirements and
              technological advancements.
            </p>
            <br />
            <br />
            <br />
            <div className="contacting-me-div">
              If you are curious and frustrated in your field, Do{" "}
              <span
                className="contact-me-in-blog"
                onClick={() => navigate("/")}
              >
                contact me
              </span>{" "}
              for a better{" "}
              <span className="career-coun-word">
                Career Guidance and Counselling
              </span>{" "}
              with full of opportunities
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Decouplingarchitecture;
