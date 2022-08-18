FROM node:18-alpine3.15
EXPOSE 5000

ENV DB_HOST='perntodoapp.postgres.database.azure.com'
ENV DB_PORT=5432
ENV DB_USERNAME='volodya@perntodoapp'
ENV DB_PASSWORD='V0l0dy41'
ENV DB_NAME='perntodoapp'


COPY . .
RUN npm install
RUN npm install cors
CMD npm run start 

