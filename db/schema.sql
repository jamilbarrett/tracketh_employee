DROP DATABASE IF EXISTS the_legion;
CREATE DATABASE the_legion;
USE the_legion;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id),
    CONSTRAINT unique_title_constraint UNIQUE (title)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL AUTO_INCREMENT,
    manager_id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id)
);
