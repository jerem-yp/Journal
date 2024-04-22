CREATE DATABASE IF NOT EXISTS journal;

# Set Database
USE journal;

# Let the application manage the tables
GRANT ALL PRIVILEGES ON journal.* TO 'application'@'localhost';
FLUSH privileges;


