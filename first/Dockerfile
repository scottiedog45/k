FROM mhart/alpine-node
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm install
# Copy app source code
COPY . .
#Expose port and start application
#This doesn't actually expose a port, just documentation for a user
EXPOSE 8080
CMD [ "npm", "start" ]