import React, { useState, useContext, useRef } from 'react'
import { Link, useHistory } from "react-router-dom";
import { SiswaContext } from './../../contexts/SiswaContext';

export const TambahSiswa = () => {
    const { dispatch } = useContext(SiswaContext);
    const history = useHistory();
    const [ validSelect, setValidSelect ] = useState(false);

    // useRef
    const nisRef = useRef()
    const namaRef = useRef()
    const jabatanRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(jabatanRef.current.value === 'jabatan') {
            setValidSelect(true);
        } else {
            dispatch({type: 'ADD_SISWA', 
                siswa: {
                  nis : nisRef.current.value,
                  nama : namaRef.current.value,
                  jabatan : jabatanRef.current.value
                }
            })
            history.push('/siswa');
            setValidSelect(false);
        }
     

    }

 


    return (
      <div className="row">
          <div className="col mt-4">
          <h2 className="pb-3">Tambah Siswa</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nis">NIS</label>
                <input type="text" className="form-control" id="nis" name="nis" required autoComplete="off"
                  ref={nisRef} />
            </div>
            <div className="form-group">
                <label htmlFor="nama">Nama</label>
                <input type="nama" className="form-control" id="nama" name="nama" required autoComplete="off"
                   ref={namaRef} />
            </div>


            <select className="form-control my-4" name="jabatan" required autoComplete="off" 
              ref={jabatanRef}>
                <option hidden value="jabatan">Jabatan</option>
                <option value="KM">KM</option>
                <option value="WKM">WKM</option>
                <option value="Sekretaris">Sekretaris</option>
                <option value="Bendahara">Bendahara</option>
                <option value="Murid">Murid</option>
            </select>
            <div className={`alert alert-danger ${validSelect ? 'd-block' : 'd-none'} `} role="alert">
                Pilih Jabatan
            </div>
            <button className="mr-2 btn btn-primary">Submit</button>
            <Link to="/siswa" className=" btn btn-danger">Kembali</Link>
           
            </form>
          </div>
      </div>
    )
}
