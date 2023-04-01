const styles = {
    heading: {
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
    },
    image: {
      display: "block",
      margin: "auto",
      width: "50%",
    },
    paragraph: {
      fontFamily: "Georgia, serif",
      textAlign: "justify",
      padding: "10px",
      margin: "0 auto",
      maxWidth: "700px",
    },
  };
  
  function SimpsonsCities() {
    return (
      <div>
        <h1 style={styles.heading}>Cidades que já apareceram em Os Simpsons:</h1>
        <h2 style={styles.heading}>Springfield</h2>
        <img style={styles.image} src="springfield.jpg" alt="Imagem de Springfield" />
        <p style={styles.paragraph}>
          Essa é a cidade em que mora a família Simpson.
        </p>
        <h2 style={styles.heading}>Shelbyville</h2>
        <img style={styles.image} src="shelbyville.jpg" alt="Imagem de Shelbyville" />
        <p style={styles.paragraph}>
          As pessoas de Shelbyville não são aparentemente mais inteligentes ou menos agressivas que as pessoas de Springfield, como foi notado no episódio Homer ama Flanders, em que é citado que pessoas de Shelbyville sabotaram o reservatório de água de Springfield como vingança por pessoas de Springfield terem incendiado a prefeitura de Shelbyville.
        </p>
        <h2 style={styles.heading}>Ogdenville</h2>
        <img style={styles.image} src="ogdenville.jpg" alt="Imagem de Ogdenville" />
        <p style={styles.paragraph}>
          Ogdenville é a cidade que fica no estado de Takoma, vizinha da cidade de Springfield, e foi a primeira a ser mencionada por Lyle Lanley onde ele já construiu um de seus monotrilhos no episódio Marge contra o monotrilho.
        </p>
      </div>
    );
  }
  