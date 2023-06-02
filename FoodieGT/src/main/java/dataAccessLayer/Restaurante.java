package dataAccessLayer;

import java.util.ArrayList;

public class Restaurante {
	private String nombre;
    private String ubicacion;
    private String precio;
    private String tipoComida;
    private String ambiente;
    private String tipoServicio;
    private String horarios;
    private String web;
    private String img1;

    public Restaurante(String nombre, String ubicacion, String precio, String tipoComida, String ambiente, String tipoServicio, String horarios, String web, String img1) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.precio = precio;
        this.tipoComida = tipoComida;
        this.ambiente = ambiente;
        this.tipoServicio = tipoServicio;
        this.horarios = horarios;
        this.web = web;
        this.img1 = img1;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public String getPrecio() {
        return precio;
    }

    public void setPrecio(String precio) {
        this.precio = precio;
    }

    public String getTipoComida() {
        return tipoComida;
    }

    public void setTipoComida(String tipoComida) {
        this.tipoComida = tipoComida;
    }

    public String getAmbiente() {
        return ambiente;
    }

    public void setAmbiente(String ambiente) {
        this.ambiente = ambiente;
    }

    public String getTipoServicio() {
        return tipoServicio;
    }

    public void setTipoServicio(String tipoServicio) {
        this.tipoServicio = tipoServicio;
    }

    public String getHorarios() {
        return horarios;
    }

    public void setHorarios(String horarios) {
        this.horarios = horarios;
    }

    public String getWeb() {
        return web;
    }

    public void setWeb(String web) {
        this.web = web;
    }

    public String getImg1() {
        return img1;
    }

    public void setImg1(String img1) {
        this.img1 = img1;
    }

  
    
    public String toString() {
		return nombre + ";" + ubicacion + ";" + precio + ";" + tipoComida + ";" + ambiente + ";" + tipoServicio + ";" + horarios + ";" + web + ";" + img1;
    	
    }
}
