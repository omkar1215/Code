import axios from "axios";
import { useState } from "react";

function Home() {
    const [emps, setEmps]  = useState([]);
    axios.get('http://localhost:9000/emps').then((result) => {
        setEmps(result.data);
    });
    return (<>
        <table border="1">
            <thead>
                <th>EMPNO</th>
                <th>ENAME</th>
                <th>JOB</th>
                <th>MANAGER</th>
                <th>HIREDATE</th>
                <th>COMM</th>
                <th>SALARY</th>
                <th>DEPTNO</th>
            </thead>
            <tbody>{
                emps.map(e=>{
                    return(<tr>
                    <td>{e.EMPNO}</td>
                    <td>{e.ENAME}</td>
                    <td>{e.JOB}</td>
                    <td>{e.MGR}</td>
                    <td>{e.HIREDATE}</td>
                    <td>{e.COMM}</td>
                    <td>{e.SAL}</td>
                    <td>{e.DEPTNO}</td>
                </tr>)
                })
                
            }
            </tbody>
        </table>
    </>);
}
export default Home;