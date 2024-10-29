import React from 'react';

const Dif_useState = () => {
  const tableData = [
    { aspect: 'Syntax', functional: 'const [count, setCount] = useState(0);', class: 'this.setState({ count: this.state.count + 1 });' },
    { aspect: 'Initialization', functional: 'const [value, setValue] = useState(initialValue);', class: 'constructor(props) { super(props); this.state = { value: initialValue }; }' },
    { aspect: 'State Updates', functional: 'const [count, setCount] = useState(0);\nconst [name, setName] = useState("Alice");', class: 'this.setState({ count: newCount });' },
    { aspect: 'State Dependency', functional: 'setCount(prevCount => prevCount + 1);', class: 'this.setState((prevState) => ({ count: prevState.count + 1 }));' },
    { aspect: 'Lifecycle and Side Effects', functional: 'useEffect(() => { /* Effect logic */ }, [dependency]);', class: 'componentDidMount() { /* Effect logic */ }' },
  ];

  return (
    <div >
      <h2>Comparison: useState vs this.setState</h2>
      <table className="table-responsive">
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Functional Components (useState)</th>
            <th>Class Components (this.setState)</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.aspect}</td>
              <td><pre>{row.functional}</pre></td>
              <td><pre>{row.class}</pre></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dif_useState;
