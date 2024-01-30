CREATE TABLE CUSTOMERS(
    id SERIAL CONSTRAINT pk_id_customer PRIMARY KEY,
    name varchar(150) NOT NULL,
    email varchar(150) UNIQUE NOT NULL,
    phone varchar(20)
);

INSERT INTO CUSTOMERS (name, email, phone) VALUES
('Roberto', 'roberto@gmail.com', '(61) 99999999');