import React, {useContext, useRef } from 'react'
import { Link, useHistory } from "react-router-dom";
import { GuruContext } from '../../contexts/GuruContext';


export const TambahGuru = () => {
    const { dispatch } = useContext(GuruContext);
    const history = useHistory();

    // useRef
    const nipRef = useRef()
    const namaRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_GURU', 
          guru:{
            nip: nipRef.current.value,
            nama: namaRef.current.value,
          }
        })
        history.push('/guru')
    }

    return (
      <div className="row">
          <div className="col mt-4">
          <h2 className="pb-3">Tambah Guru</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nis">NIP</label>
                <input type="text" className="form-control" id="nis" name="nis" required autoComplete="off"
                  ref={nipRef} />
            </div>
            <div className="form-group">
                <label htmlFor="nama">Nama</label>
                <input type="nama" className="form-control" id="nama" name="nama" required autoComplete="off"
                   ref={namaRef} />
            </div>
            <button className="mr-2 btn btn-primary">Submit</button>
            <Link to="/guru" className=" btn btn-danger">Kembali</Link>
           
            </form>
          </div>
      </div>
    )
}
