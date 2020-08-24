import React from "react";
import Widget from "../../../../../components/Widget";
import TextField from "@material-ui/core/TextField";
import {Button} from "react-bootstrap";

const Permohonan = ({match}) => {
  return (
    <Widget>
      <form className="row" noValidate autoComplete="off" style={{
        width: "75%"
      }}>
        <div className="col-lg-12">
          <TextField
            id="name"
            label="Nama"
            margin="normal"
            fullWidth
          />
        </div>
        <div className="col-lg-12">
          <TextField
            id="alamat"
            label="Alamat"
            margin="normal"
            fullWidth
          />
        </div>
        <div className="col-lg-12">
          <TextField
            id="name"
            label="Pekerjaan"
            margin="normal"
            fullWidth
          />
        </div>
        <div className="col-lg-12">
          <TextField
            id="name"
            label="No Telp"
            margin="normal"
            fullWidth
          />
        </div>
        <div className="col-lg-12">
          <TextField
            id="name"
            label="Email"
            margin="normal"
            fullWidth
          />
        </div>
        <div className="col-lg-12">
          <TextField
            id="name"
            label="Rincian Data dan Informasi Yang Dibutuhkan"
            margin="normal"
            fullWidth
          />
        </div>
        <div className="col-lg-12">
          <TextField
            id="name"
            label="Alasan Pemohon Informasi"
            margin="normal"
            fullWidth
          />
        </div>
        <div className="col-lg-12">
          <TextField
            id="name"
            label="Nama Pengguna Informasi"
            margin="normal"
            fullWidth
          />
        </div>
        <div className="col-lg-12">
          <TextField
            id="name"
            label="Alamat Pengguna Informasi"
            margin="normal"
            fullWidth
          />
        </div>
        <div className="col-lg-12">
          <TextField
            id="name"
            label="No Telp Pengguna Informasi"
            margin="normal"
            fullWidth
          />
        </div>
        <div className="col-lg-12">
          <TextField
            id="name"
            label="Email Pengguna Informasi"
            margin="normal"
            fullWidth
          />
        </div>
        <div className="col-lg-12">
          <TextField
            id="name"
            label="Tujuan Penggunaan Data dan Informasi"
            margin="normal"
            fullWidth
          />
        </div>
        <div className="col-lg-12">
          <div className="jr-btn-group mb-3">
            <Button variant="contained" color="primary" className="jr-btn text-white">Primary</Button>
          </div>
        </div>
      </form>
      <div className="jr-btn-group mb-3">
        <Button variant="primary">Kirim</Button>
      </div>
    </Widget>
  )
};
export default Permohonan;
