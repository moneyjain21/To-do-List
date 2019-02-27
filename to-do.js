table = document.createElement('table')
table.align = 'center'
table.border = '1'
table.setAttribute('id', 'tableid')

/* var div4 = document.createElement("div");
var create = document.createElement("INPUT");
    create.setAttribute("type", "button");
    create.setAttribute('id','create'); */

  function  clearData(){
        document.getElementById("date").createTextNode("");
        document.getElementById("description").createTextNode("");
    }

function getToDoList () {
  var div1 = document.createElement('div')
  div1.setAttribute('id', 'div1')
  var div1Content = document.createTextNode('To-Do List')
  div1.appendChild(div1Content)
  document.body.appendChild(div1)

  var div2 = document.createElement('div')
  div2.setAttribute('id', 'div2')

  var span1 = document.createElement('span')
  var date = document.createElement('INPUT')
  date.setAttribute('type', 'date')
  date.setAttribute('id', 'date')
  var label1 = document.createElement('label')
  var text1 = document.createTextNode('Date : ')
  label1.appendChild(text1)
  span1.appendChild(label1)
  span1.appendChild(date)
  div2.appendChild(span1)

  var span2 = document.createElement('span')
  var description = document.createElement('INPUT')
  description.setAttribute('type', 'text')
  description.setAttribute('id', 'description')
  description.setAttribute('placeholder', 'Description')
  var label2 = document.createElement('label')
  var text2 = document.createTextNode(' Description : ')
  label2.appendChild(text2)
  span2.appendChild(label2)
  span2.appendChild(description)
  div2.appendChild(span2)

  var span3 = document.createElement('span')
  var add = document.createElement('INPUT')
  add.setAttribute('type', 'button')
  add.setAttribute('id', 'add')
  add.setAttribute('value', '+')
  span3.appendChild(add)
  div2.appendChild(span3)

  var span4 = document.createElement('span') // Clear is not working
  var clear = document.createElement('Input')
  clear.setAttribute('type', 'reset')
  clear.setAttribute('id', 'clear')
  clear.setAttribute('value', 'Clear')
  clear.setAttribute('onclick', 'clearData()')
  span4.appendChild(clear)
  div2.appendChild(span4)
  

  document.body.appendChild(div2)

  var div3 = document.createElement('div')
  div3.setAttribute('id', 'div3')
  document.getElementById('add').addEventListener('click', display)
  var tableData = []

  function display () {
    var dateText = document.getElementById('date').value
    var descriptionText = document.getElementById('description').value

    if (dateText == '' || descriptionText == '') {
      alert('Enter the values')
    } else {
      var tr = document.createElement('tr')
      tr.setAttribute('id', 'row' + count)
      var td1 = document.createElement('td')
      var td2 = document.createElement('td')
      var td3 = document.createElement('td')
      var btn = document.createElement('button')
      var removeBtn = document.createTextNode('-')
    }
    btn.appendChild(removeBtn)
    btn.setAttribute('onclick', 'removeRow(row' + count + ')')

    var descriptionCell = document.createTextNode(descriptionText)
    var dateCell = document.createTextNode('  ' + dateText)
    td1.appendChild(dateCell)
    td2.appendChild(descriptionCell)
    td3.appendChild(btn)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    table.appendChild(tr)
    div3.appendChild(table)
    document.body.appendChild(div3)

    tableData.push({ Date: dateText, description: descriptionText })
    count += 1

    // console.log(tableData);
  }
  count = 0
}
function removeRow (element) {
  element.remove()
}
