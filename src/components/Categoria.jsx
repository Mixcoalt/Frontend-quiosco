import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({categoria}) => {

    const { handleClickCategoria, categoriaActual } = useQuiosco()

    const {icono, id, nombre} = categoria

    return (
        <div className={` ${categoriaActual.id === id ? "bg-amber-400" : "bg-white"}  
            flex items-center gap-4 border w-full p-3
            hover:bg-amber-400 cursor-pointer`}
        >
            <img 
                src={`/img/icono_${icono}.svg`}
                className="w-12"
                alt="Imagen Icono" 
            />

            <button 
                className="text-lg font-bold truncate cursor-pointer"
                type="button"
                onClick={ () => handleClickCategoria(id) }    
            >
                {nombre}
            </button>

        </div>
    );
};

export default Categoria;