import React, {useRef} from 'react'
import { Link, useParams, useHistory } from "react-router-dom";
import { useSiswaContext } from '../../contexts/SiswaContext';

export const EditSiswa = () => {

    const { dataSiswa, dispatch } = useSiswaContext()
    const params = useParams()
    const history = useHistory()
 
    // useRef
    const nisRef = useRef()
    const namaRef = useRef()
    const jabatanRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'UPDATE_SISWA', updateSiswa: {
            siswa: {
                nis : nisRef.current.value,
                nama : namaRef.current.value,
                jabatan : jabatanRef.current.value
            },
            id: params.id
        }})
        history.push('/siswa');
    }
    return (
        <div className="row">
          <div className="col mt-4">
          <h2 className="pb-3">Edit Siswa</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nis">NIS</label>
                <input type="text" className="form-control"  id="nis" name="nis" required autoComplete="off"
                 ref={nisRef}
                 defaultValue={dataSiswa[params.id].nis}
                  />
            </div>
            <div className="form-group">
                <label htmlFor="nama">Nama</label>
                <input type="nama" className="form-control"  id="nama" name="nama" required autoComplete="off"
                  ref={namaRef}
                  defaultValue={dataSiswa[params.id].nama}
                  />
            </div>


            <select className="form-control my-4" name="jabatan" required autoComplete="off" 
             ref={jabatanRef} defaultValue={dataSiswa[params.id].jabatan}>
                <option value="KM">KM</option>
                <option value="WKM">WKM</option>
                <option value="Sekretaris">Sekretaris</option>
                <option value="Bendahara">Bendahara</option>
                <option value="Murid">Murid</option>
            </select>
            <button className="btn btn-primary mr-2">Submit</button>
            <Link to="/siswa" className=" btn btn-danger">Kembali</Link>
            </form>
          </div>
      </div>
    )
}
