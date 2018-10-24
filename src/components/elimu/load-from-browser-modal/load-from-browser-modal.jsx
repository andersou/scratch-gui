import Modal from '../../modal/modal.jsx';
import React from 'react';
import db from '../../../lib/elimu/project-database';
import style from './load-from-browser.css';
import { connect } from 'react-redux';


class LoadFromBrowserModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projetos: []
        }
    }
    componentDidMount() {
        console.log("montando")
        let projetos = []
        db.projects.reverse().each(projeto => {
            projetos.push(projeto);
        }).then(() => {
            this.setState({ projetos });
        })
    }
    salvarProjeto(projeto) {
        const downloadLink = document.createElement('a');
        document.body.appendChild(downloadLink);
        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(projeto, "ProjetoBackup.sb3");
            return;
        }

        const url = window.URL.createObjectURL(projeto);
        downloadLink.href = url;
        downloadLink.download = "ProjetoBackup.sb3";
        downloadLink.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(downloadLink);
    }
    carregarProjeto(projeto) {
        var reader = new FileReader();
        reader.addEventListener("loadend", ()=> {
            this.props.vm.loadProject(reader.result)
        });
        reader.readAsArrayBuffer(projeto);
    }
    render() {
        return (
            <Modal className={style.modalLfb} contentLabel={"Carregamento de projetos"} onRequestClose={this.props.onRequestClose}>
                <table className={`${style.pureTable}`}>
                    <thead>
                        <tr>
                            <td>
                                Id
                            </td>
                            <td>
                                Timestamp
                            </td>
                            <td>
                                Evento
                            </td>
                            <td>
                            </td>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.projetos.map(projeto => {
                            return <tr key={projeto.id}>
                                <td>{projeto.id}</td>
                                <td>{projeto.timestamp.toLocaleString()}</td>
                                <td>{projeto.event}</td>
                                <td>
                                    <button className={`${style.pureButton} ${style.pureButtonPrimary}`} onClick={() => this.salvarProjeto(projeto.project)}>Salvar</button>
                                    <button className={`${style.pureButton} ${style.pureButtonPrimary}`} onClick={() => this.carregarProjeto(projeto.project)}>Carregar</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </Modal>
        )
    }
}
const mapStateToProps = state => ({
    vm: state.scratchGui.vm
})
export default connect(mapStateToProps, () => ({}))(LoadFromBrowserModal);