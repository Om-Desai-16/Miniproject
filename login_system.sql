CREATE DATABASE login_system;
USE login_system;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    auid VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    user_type ENUM('student', 'coordinator') NOT NULL
);
INSERT INTO users (auid, password, user_type)
VALUES 
('student001', '$2a$10$Vv/QJmKIJ5DwWRbbTPEbTeTqIh28H43Lg.LzVGHHyY9HtZ5.kg0L6', 'student'), 
('coordinator001', '$2a$10$gKb2uGB1n76tQ.rXidHh6uJIO7IY58NSu8tKf6Id6NDQ8aQmtLfH2', 'coordinator');
SELECT * FROM USERS;

