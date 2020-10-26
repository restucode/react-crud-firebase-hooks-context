import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useGuruContext } from '../../contexts/GuruContext';

export const DetailGuru = () => {
    const { dataGuru } = useGuruContext()
    const params = useParams()
 
    return (
        <>
        <div className="card mt-4" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">Detail Siswa</h5>
                <h6 className="card-subtitle mb-2 text-muted">XII RPL-2</h6>
                <p className="card-text">NIP : {dataGuru[params.id].nip}</p>
                <p className="card-text">Nama : {dataGuru[params.id].nama}</p>

                <Link className="btn btn-primary mr-2" to={`/guru/edit/${params.id}`}>Edit</Link>
                <button className="btn btn-danger mr-2">Delete</button>
                <Link className="btn btn-secondary" to="/guru">Kembali</Link>
            </div>
        </div>
        </>
    )
}
