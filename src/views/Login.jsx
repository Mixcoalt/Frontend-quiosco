import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
        <h1 className='text-4xl font-black'>
            Inicia Sesión
        </h1>
  
        <p>
          Para crear un pedido debes iniciar sesión
        </p>
  
          <div className='bg-white shadow-md rounded-md
          mt-10 px-5 py-10'> 
  
          <form action="">
  
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

  
              <input 
                  type="submit"
                  value="Iniciar Sesión"
                  className="bg-indigo-600 hover:bg-indigo-800
                  text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
              />
  
          </form>
  
          </div>

          <nav className="mt-5">
            <Link to="/auth/registro">
                ¿No tienes Cuenta? Crea una.
            </Link>
          </nav>
  
      </>
    );
};

export default Login;