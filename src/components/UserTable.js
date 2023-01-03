import Table from "react-bootstrap/Table";

function UserTable(data) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {data.data.data.map((obj) => {
          return (
            <tr key={obj.id}>
              <td>{obj.id}</td>
              <td>{obj.first_name}</td>
              <td>{obj.last_name}</td>
              <td>{obj.email}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default UserTable;
