#DOckerfile säger vad som ska göras när man vill bygga en docker image

#Vilken "base image" vi vill använda för att köra vår app? Web-appar körs alltid i node
FROM node:10

#RUN kör ett kommando i din docker image
RUN npm install -g http-server


#WORKDIR anger vilken mapp vi ska kopiera våra filter till i vår docker image
WORKDIR /app

#Kopiera över package.json och package-lock.json (därför är stjärnan där för att kopiera båda)
COPY package*.json ./

#installera package
RUN npm install 

#Kopiera över resten av filerna till vår app-app i vår docker image
COPY . . 

#Bygg vår vue app i vår docker image
RUN npm run build

EXPOSE 8080
#Kör igång vår http-server och servrar vår dist-mapp
CMD ["http-server", "dist"]