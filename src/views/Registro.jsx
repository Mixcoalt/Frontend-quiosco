//import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Registro = () => {
    return (
    <>
      <h1 className='text-4xl font-black'>
        Crea Tu cuenta
      </h1>

      <p>
        Crea tu cueenta llenando el Formulario
      </p>

        <div className='bg-white shadow-md rounded-md
        mt-10 px-5 py-10'> 

        <form action="">
            <div className='mb-4'>
                <label 
                    htmlFor="name"
                    className='text-slate-800'
                >
                    Nombre
                </label>
                <input 
                    type="text" 
                    id='name'
                    className='mt-2 p-3 bg-gray-50
                    w-full'
                    name='name'
                    placeholder='Tu nombre'
                />
            </div>

            <div className='mb-4'>
                <label 
                    htmlFor="email"
                    className='text-slate-800'
                >
                    E-mail
                </label>
                <input 
                    type="email" 
                    id='email'
                    className='mt-2 p-3 bg-gray-50
                    w-full'
                    name='email'
                    placeholder='Correo Electronico'
                />
            </div>

            <div className='mb-4'>
                <label 
                    htmlFor="password"
                    className='text-slate-800'
                >
                    Password
                </label>
                <input 
                    type="password" 
                    id='password'
                    className='mt-2 p-3 bg-gray-50
                    w-full'
                    name='name'
                    placeholder='Tu Contraeña'
                />
            </div>

            <div className='mb-4'>
                <label 
                    htmlFor="password_confirmation"
                    className='text-slate-800'
                >
                    Repite tu Password
                </label>
                <input 
                    type="password_confirmation" 
                    id='password'
                    className='mt-2 p-3 bg-gray-50
                    w-full'
                    name='password'
                    placeholder='Repite tu Password'
                />
            </div>

            <div className='mb-4'>
                <label 
                    htmlFor="direcion"
                    className='text-slate-800'
                >
                    Direccion
                </label>
                <input 
                    type="text" 
                    id='direcion'
                    className='mt-2 p-3 bg-gray-50
                    w-full'
                    name='direcion'
                    placeholder='Tu direccion'
                />
            </div>

            <div className='mb-4'>
                <label 
                    htmlFor="telefono"
                    className='text-slate-800'
                >
                    Telefono
                </label>
                <input 
                    type="tel" 
                    id='telefono'
                    className='mt-2 p-3 bg-gray-50
                    w-full'
                    name='telefono'
                    placeholder='0123456789'
                />
            </div>

            <input 
                type="submit"
                value="Crear Cuenta"
                className="bg-indigo-600 hover:bg-indigo-800
                text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            />

        </form>

        </div>

        <nav className="mt-5">
            <Link to="/auth/login">
                ¿Ya tienes Cuenta? Inicia Sesión.
            </Link>
        </nav>

    </>
    );
};

export default Registro;