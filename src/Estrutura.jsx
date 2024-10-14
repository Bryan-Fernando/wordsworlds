import './Estrutura.css';

function Estrutura({ children }) {
    return (
        <div>
            <main>
                <div className="side">
                    <p className="wordside">Words and Worlds</p>
                    <p className="englishside">ENGLISH COURSE</p>
                </div>
                <div className="justifyaround">
                    <div className="content">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Estrutura;
