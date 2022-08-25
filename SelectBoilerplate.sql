USE higienepessoal;
SELECT * FROM formulario;

-- Um banho a cada dois dias
SELECT count(*) 'Banho a cada dois dias'
FROM formulario
WHERE p1 = 1;

-- Escovam o dente 2 vezes ao dia
SELECT count(*) 'Escovam o dente duas vezes ao dia'
FROM formulario
WHERE p2 = 2;

-- Tempo médio de banho de 5 minutos
SELECT count(*) 'Tempo médio de banho de 5 minutos'
FROM formulario
WHERE p3 = 1;

-- Não fecham a torneira ao escovar os dentes
SELECT count(*) 'Fecham a torneira ao escovar os dentes'
FROM formulario
WHERE p4 = 1;

-- Fecham a torneira ao escovar os dentes
SELECT count(*) 'Não fecham a torneira ao escovar os dentes'
FROM formulario
WHERE p4 = 2;

-- Usam fio dental
SELECT count(*) 'Usam fio dental'
FROM formulario
WHERE p5 = 1;

-- Não sam fio dental
SELECT count(*) 'Não usam fio dental'
FROM formulario
WHERE p5 = 1;

