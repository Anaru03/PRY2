package dataAccessLayer;

import java.util.ArrayList;

public class Restaurante {
	private String nombre;
	private ArrayList<String> ubicacion;
	private String precio;
	private ArrayList<String> tipoComida;
    private ArrayList<String> ambiente;
    private ArrayList<String> tipoServicio;
	private ArrayList<String> horarios;
    private String web;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public ArrayList<String> getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(ArrayList<String> ubicacion) {
        this.ubicacion = ubicacion;
    }

    public String getPrecio() {
        return precio;
    }

    public void setPrecio(String precio) {
        this.precio = precio;
    }

    public ArrayList<String> getTipoComida() {
        return tipoComida;
    }

    public void setTipoComida(ArrayList<String> tipoComida) {
        this.tipoComida = tipoComida;
    }

    public ArrayList<String> getAmbiente() {
        return ambiente;
    }

    public void setAmbiente(ArrayList<String> ambiente) {
        this.ambiente = ambiente;
    }

    public ArrayList<String> getTipoServicio() {
        return tipoServicio;
    }

    public void setTipoServicio(ArrayList<String> tipoServicio) {
        this.tipoServicio = tipoServicio;
    }

    public ArrayList<String> getHorarios() {
        return horarios;
    }

    public void setHorarios(ArrayList<String> horarios) {
        this.horarios = horarios;
    }

    public String getWeb() {
        return web;
    }

    public void setWeb(String web) {
        this.web = web;
    }

}
