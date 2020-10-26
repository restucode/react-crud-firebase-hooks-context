import React from 'react'
import { useParams } from 'react-router-dom'
import { useSiswaContext } from '../../contexts/SiswaContext'
import { Link } from "react-router-dom";

export const DetailSiswa = () => {
    const { dataSiswa } = useSiswaContext()
    const params = useParams()
 
    return (
        <>
        <div className="card mt-4" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">Detail Siswa</h5>
                <h6 className="card-subtitle mb-2 text-muted">XII RPL-2</h6>
                <p className="card-text">NIS : {dataSiswa[params.id].nis}</p>
                <p className="card-text">Nama : {dataSiswa[params.id].nama}</p>
                <p className="card-text">Jabatan : {dataSiswa[params.id].jabatan}</p>

                <Link className="btn btn-primary mr-2" to={`/siswa/edit/${params.id}`}>Edit</Link>
                <button className="btn btn-danger mr-2">Delete</button>
                <Link className="btn btn-secondary" to="/siswa">Kembali</Link>
            </div>
        </div>
        </>
    )
}
