INSERT INTO tabela1 (nome,idade,cidade,email) 
VALUES ('novo nome', '44', 'cidade falsa', 'email@gmail.com');
SELECT * FROM tabela1 LIMIT 50

UPDATE `tabela1` SET nome = 'meu nome' WHERE id = 0000000002;

SELECT * FROM tabela1 LIMIT 50;
DELETE FROM `tabela1` WHERE nome = 'meu nome';
SELECT * FROM tabela1 LIMIT 50;