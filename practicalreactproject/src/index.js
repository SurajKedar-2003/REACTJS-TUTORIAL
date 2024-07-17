import react from 'react';
import Reactdom from 'react-dom';
import './index.css'
Reactdom.render(<div>
  <ul>
    <li>Mobile</li>
    <li>Laptop</li>
    <li>Headphones</li>
  </ul>
  <ol>
    <li>Mobile</li>
    <li>Laptop</li>
    <li>Headphones</li>
  </ol>
  <table>
    <tr style={{'backgroundColor':'yellow'}}>
      <th>Id</th>
      <th>name</th>
      <th>salary</th>
    </tr>
    <tr>
      <td>101</td>
      <td>suraj</td>
      <td>60000</td>
    </tr>
    <tr>
      <td>102</td>
      <td>kedar</td>
      <td>40000</td>
    </tr>
  </table>
</div>, document.getElementById('root')
);