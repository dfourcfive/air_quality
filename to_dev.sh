cp dev.env .env

sed -i 's/DB_PORT/27017/' .env #replace DB_PORT with the 27017
sed -i 's/DB_NAME/air_quality/' .env #replace DB_NAME with the air_quality
sed -i 's/DB_HOST/127.0.0.1/' .env #replace DB_NAME with the 127.0.0.1