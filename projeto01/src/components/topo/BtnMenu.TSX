type BtnMenuProps = {
    isOpen: boolean;
    onToggle: () => void;
};

function BtnMenu({ isOpen, onToggle }: BtnMenuProps) {
    return (
        <button
            type="button"
            className='btn_hamburguer'
            style={btnHamburguerStyle}
            onClick={onToggle}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            aria-controls="menu-principal"
        >
            <span style={lineStyle}></span>
            <span style={lineStyle}></span>
            <span style={lineStyle}></span>
        </button>
    );
}

export default BtnMenu;

const lineStyle = {
    display: 'block',
    width: '25px',
    height: '3px',
    backgroundColor: 'black',
    margin: '3px 0',
    marginTop: '5px',
    transition: '0.4s'
};

const btnHamburguerStyle = {
    width: "35px",
    height: "40px",
    padding: "5px",
    cursor: "pointer"
};
