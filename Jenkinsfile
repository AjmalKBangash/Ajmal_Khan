pipeline {
    agent any
    environment {
        // Set up environment variables for GitHub and Docker Hub credentials
        GITHUB_TOKEN = credentials('github-jenkins-id-for-pat')
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials-id')
        DOCKER_IMAGE_NAME = 'ajmalkhanbangash/port-frontend' // Docker image name in Docker Hub
        VERSION = '' //This will be populated from the package.json file
        // VERSION_FILE = 'VERSION'
        // DOCKER_IMAGE_TAG = '' //This will be populated from the VERSION file
    }
    stages {
        stage('Checkout pulling code') {
            steps {
                // Clone the private GitHub repository using the GitHub token
                // git branch: 'super', url: "https://${GITHUB_TOKEN}@github.com/AjmalKBangash/Portfolio-Frontend.git"
                withCredentials([usernamePassword(credentialsId: 'github-jenkins-id-for-pat', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                    // Use `git` without interpolation for the URL
                    // git branch: 'super', credentialsId: 'github-jenkins-id-for-pat', url: "https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/AjmalKBangash/Portfolio-Frontend.git"
                    git branch: 'super', credentialsId: 'github-jenkins-id-for-pat', url: "https://github.com/AjmalKBangash/Portfolio-Frontend.git"
                }
            }
        }
        // stage('Read Version') {
        //     steps {
        //         script {
        //             // Read the version from VERSION file
        //             DOCKER_IMAGE_TAG = sh(script: "cat $VERSION_FILE", returnStdout: true).trim()
        //             echo "Using Docker image tag: $DOCKER_IMAGE_TAG"
        //         }
        //     }
        // }
        stage ('checkout VERSION stage') {
            steps {
                script {
                    echo 'checkout VERSION stage is started'
                    // Read version from package.json
                    env.VERSION = sh( script: "jq -r '.version' package.json", returnStdout: true).trim()
                    // Print the version to confirm
                    // environment.VERSION = ${VERSIONN} // This is wrong
                    echo "Building version ${env.VERSION}"
                    echo 'checkout version stage is completed'
                }
            }
        }
        stage ('printing version stage ') {
            steps {
                script {
                    echo "printing version === ${VERSION} and docker image name === ${DOCKER_IMAGE_NAME}"
                }
            }
        }
        // stage('Build Docker Image') {
        //     steps {
        //         // Build the Docker image using the Dockerfile in the repository
        //         script {
        //             sh 'docker build -t $DOCKER_IMAGE_NAME:0.0.8 .'
        //             // sh 'docker build -t $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG .'
        //             // sh 'docker buildx build --platform linux/amd64 -t $DOCKER_IMAGE_NAME .'
        //         }
        //     }
        // }
        // stage('Login to Docker Hub') {
        //     steps {
        //         // Log in to Docker Hub using credentials
        //         script {
        //             sh "echo $DOCKER_HUB_CREDENTIALS_PSW | docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin"
        //         }
        //     }
        // }
        // stage('Push Docker Image') {
        //     steps {
        //         // Push the Docker image to Docker Hub
        //         script {
        //             sh 'docker push $DOCKER_IMAGE_NAME:0.0.8'
        //         }
        //     }
        // }
    }
    post {
        always {
            // Clean up Docker images to free up space after each run
            // sh 'docker image rm $DOCKER_IMAGE_NAME:0.0.6 || true'
            echo "always portion will always run ..."
        }
        success {
            echo 'version checkout Pipeline executed successfully!'
        }
        failure {
            echo 'version checkout Pipeline failed. Check logs for errors.'
        }
    }
}











// pipeline {
//     agent any
//     environment {
//         // Set up environment variables for GitHub and Docker Hub credentials
//         GITHUB_TOKEN = credentials('github-jenkins-id-for-pat')
//         DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials-id')
//         DOCKER_IMAGE_NAME = 'ajmalkhanbangash/port-frontend' // Docker image name in Docker Hub
//         // VERSION_FILE = 'VERSION'
//         // DOCKER_IMAGE_TAG = '' //This will be populated from the VERSION file
//     }
//     stages {
//         stage('Checkout pulling code') {
//             steps {
//                 // Clone the private GitHub repository using the GitHub token
//                 // git branch: 'super', url: "https://${GITHUB_TOKEN}@github.com/AjmalKBangash/Portfolio-Frontend.git"
//                 withCredentials([usernamePassword(credentialsId: 'github-jenkins-id-for-pat', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
//                     // Use `git` without interpolation for the URL
//                     // git branch: 'super', credentialsId: 'github-jenkins-id-for-pat', url: "https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/AjmalKBangash/Portfolio-Frontend.git"
//                     git branch: 'super', credentialsId: 'github-jenkins-id-for-pat', url: "https://github.com/AjmalKBangash/Portfolio-Frontend.git"
//                 }
//             }
//         }
//         // stage('Read Version') {
//         //     steps {
//         //         script {
//         //             // Read the version from VERSION file
//         //             DOCKER_IMAGE_TAG = sh(script: "cat $VERSION_FILE", returnStdout: true).trim()
//         //             echo "Using Docker image tag: $DOCKER_IMAGE_TAG"
//         //         }
//         //     }
//         // }
//         stage('Build Docker Image') {
//             steps {
//                 // Build the Docker image using the Dockerfile in the repository
//                 script {
//                     sh 'docker build -t $DOCKER_IMAGE_NAME:0.0.8 .'
//                     // sh 'docker build -t $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG .'
//                     // sh 'docker buildx build --platform linux/amd64 -t $DOCKER_IMAGE_NAME .'
//                 }
//             }
//         }
//         stage('Login to Docker Hub') {
//             steps {
//                 // Log in to Docker Hub using credentials
//                 script {
//                     sh "echo $DOCKER_HUB_CREDENTIALS_PSW | docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin"
//                 }
//             }
//         }
//         stage('Push Docker Image') {
//             steps {
//                 // Push the Docker image to Docker Hub
//                 script {
//                     sh 'docker push $DOCKER_IMAGE_NAME:0.0.8'
//                 }
//             }
//         }
//         stage('Running the Docker Image') {
//             steps {
//                 // Running the Docker image locally 
//                 script {
//                     sh 'docker run -d --name container-from-jenkins -p 80:80 $DOCKER_IMAGE_NAME:0.0.8'
//                 }
//             }
//         }
//     }
//     post {
//         always {
//             // Clean up Docker images to free up space after each run
//             // sh 'docker image rm $DOCKER_IMAGE_NAME:0.0.6 || true'
//             echo "always portion will always run ..."
//         }
//         success {
//             echo 'Pipeline executed successfully!'
//         }
//         failure {
//             echo 'Pipeline failed. Check logs for errors.'
//         }
//     }
// }





