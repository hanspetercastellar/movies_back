/*
@author: Hans Castellar
@Descripcion: Este documento contiene las funciones controladoras respectivas para cada endpoin de la entidad movi
*/

import "../models/user";
import {Movi} from "../models/movi";
import {MoviDetail} from "../models/movi_detail";
import {Favoritos} from "../models/favoritos";
import {response} from "express";

export class MovieController {
  async list(req, res) {
    try{
      const data = await Movi.findAll({include: MoviDetail})
      res.status(200).json({success:true, data, message:"listado"})
    }catch(err){
      res.status(500).json({success:false, data:null, message:"listado", error:err})
    }
  }
  //Detalle de una pelicula
  async detail(req, res) {
    const {movie_id} = req.body;
    const query = await MoviDetail.findByPk(movie_id);
    const detail = await query.getMoviDetail();
    if (query === null) {
      res.status(200).json({success: true, message: "nada para listar", data: null});
    } else {
      response
        .status(200)
        .json({success: true, message: "recurso encontrado", data: detail});
    }
  }
  //buscar Por nombre: retorna una lista de peliculas
  async listByName(req, res) {
    const {nombre} = req.body;
    const query = await Movi.findAll({
      where: {
        nombre: {
          [Op.substring]: nombre,
        },
      },
    });

    if (query === null) {
      res.status(200).json({success: true, message: "nada para listar", data: null});
    } else {
      res.status(200).json({success: true, message: "listado", data: query});
    }
  }
  //Agregar peliculas a favoritos
  async addToFavorite(req, res) {
    const {id_movie, id_user} = req.body;
    const query = await Favoritos.create({
      movi_id: id_movie,
      user_id: id_user,
    });
  }
  async listFavorite(req, res) {
    //const {id_user} = req.body;
    try{
      const query = await Favoritos.findAll({
        include:[
            association
        ]
      });
      res.json({query})
    }catch(err){
      res.status(500).json({success:false, error:err})
    }

  }
}
