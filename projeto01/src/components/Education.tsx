const educationData = [
    {name: 'Análise e Desenvolvimento de Sistemas', inicio: 2002, fim: 2025, instituicao: 'Senac'},
    {name: 'Ensino Médio', inicio: 2008, fim: 2011, instituicao: 'E.E Antonio Manoel Alves de Lima'}
]

function Education() {
  return (
    <div className="education" id="education">
      <h2>Educação</h2>
        <div className="education-list">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <h3>{edu.name}</h3>
              <p>{edu.instituicao}</p>
              <p>{edu.inicio} - {edu.fim}</p>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Education;