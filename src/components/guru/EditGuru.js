import React, {useRef} from 'react'
import { Link, useParams, useHistory } from "react-router-dom";
import { useGuruContext } from '../../contexts/GuruContext';

export const EditGuru = () => {

    const { dataGuru, dispatch } = useGuruContext()
    const params = useParams()
    const history = useHistory()
 
    // useRef
    const nipRef = useRef()
    const namaRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'UPDATE_GURU', updateGuru: {
            guru: {
                nip : nipRef.current.value,
                nama : namaRef.current.value,
            },
            id: params.id
        }})
        history.push('/guru');
    }
    return (
        <div className="row">
          <div className="col mt-4">
          <h2 className="pb-3">Edit Guru</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nip">NIP</label>
                <input type="text" className="form-control"  id="nip" name="nip" required autoComplete="off"
                 ref={nipRef}
                 defaultValue={dataGuru[params.id].nip}
                  />
            </div>
            <div className="form-group">
                <label htmlFor="nama">Nama</label>
                <input type="nama" className="form-control"  id="nama" name="nama" required autoComplete="off"
                  ref={namaRef}
                  defaultValue={dataGuru[params.id].nama}
                  />
            </div>
            <button className="btn btn-primary mr-2">Submit</button>
            <Link to="/siswa" className=" btn btn-danger">Kembali</Link>
            </form>
          </div>
      </div>
    )
}
