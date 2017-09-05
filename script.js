var data = [];

data[0] = [];
data[0][0] = 'TH COLUMN 1';
data[0][1] = 'TH COLUMN 2';
data[0][2] = 'TH COLUMN 3';
data[0][3] = 'TH COLUMN 4';

data[1] = [];
data[1][0] = 'line 1 col 1';
data[1][1] = 'line 1 col 2';
data[1][2] = 'line 1 col 3';
data[1][3] = 'line 1 col 4';

data[2] = [];
data[2][0] = 'line 2 col 1';
data[2][1] = 'line 2 col 2';
data[2][2] = 'line 2 col 3';
data[2][3] = 'line 2 col 3';


createDynamicTable('table1', data);
createTable('newTable', 2, 3, data[1]);

/**
 * Criação de tabela dinâmica baseado em dados armazenados em array javascript
 */
function createDynamicTable(element, data){
  var table = document.getElementById(element);
  var lenCol = data.length;
  var est = '';
  for(var i = 0; i < lenCol; i++){
    var lenLine = data[i].length;
    est += '<tr>'
    for(var j = 0; j < lenLine; j++){
      est += i === 0 ? '<th>' : '<td>';
      est += data[i][j];
      est += i === 0 ? '</th>' : '</td>';
    }
    est += '</tr>';
  }
  table.innerHTML = est;
}

/**
 * tabela dinâmica baseada em quantidade de linhas e colunas baseada em informações
 armazenados em array
 */
function createTable(element, qtdLine, qtdColumn, data){
  var table = document.getElementById(element);
  var len = data.length;
  var el = '<table border="1">';
  //var qtdEl = 0; Desnecessário, pode usar o próprio J
  var linha = [];
  for(var i = 0; i <= qtdLine; i++){ //Alterei para <= considerando q a linha 1 é o nome das colunas
    el += '<tr>';
    linha = data[i]; //salva cada linha da tabela
      for(var j = 0; j < qtdColumn; j++){
        el += '<td>';
        if(qtdEl < len){
            el += linha[j];
        }
        el += '</td>';
        //qtdEl++;
      }
      el += '</tr>';
  }
  el += '</table>';
  table.innerHTML = el;
}
