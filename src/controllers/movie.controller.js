/*
@author: Hans Castellar
@Descripcion: Este documento contiene las funciones controladoras respectivas para cada endpoin de la entidad movi
*/

import "../models/user";
import {Movi} from "../models/movi";
import {MoviDetail} from "../models/movi_detail";
import {Favoritos} from "../models/favoritos";
import {response} from "express";
import sequelize from "../config/database";
import {Op} from "sequelize";
export const MovieController = {
    list: async(req, res) => {
        try {
            const data = await Movi.findAll({include: MoviDetail})
            res.status(200).json({success: true, data, message: "listado"})
        } catch (err) {
            res.status(500).json({success: false, data: null, message: "listado", error: err})
        }
    },

    //Detalle de una pelicula
    detail: async(req, res) => {
        const {id_movie} = req.body;
        console.log(id_movie)
        const query = await MoviDetail.findOne({where:{movi_id: 1}})
        if (query === null) {
            res.status(200).json({success: true, message: "nada para listar", data: null});
        } else {
            res
                .status(200)
                .json({success: true, message: "recurso encontrado", data: query});
        }
    },

    //buscar Por nombre: retorna una lista de peliculas
     listByName: async (req, res) => {
        const {title_movie} = req.body;
        const query = await Movi.findAll({
            where: {
                nombre: {
                    [Op.substring]: title_movie,
                },
            },
            include: MoviDetail
        });

        if (query === null) {
            res.status(200).json({success: false, message: "nada para listar", data: null});
        } else {
            res.status(200).json({success: true, message: "listado", data: query});
        }
    },

    //Agregar peliculas a favoritos
    addToFavorite: async (req, res) => {
        console.log(req.body)
        const {id_movie, id_user} = req.body;
        try{

            const query = await Favoritos.create({
                movi_id: id_movie,
                user_id: id_user,
            });
            if(query !== null){
                    res.status(200).json({success:true, status:200, message:'Añadido a Favoritos'})
            }
            else{
                res.status(200).json({success:false, status:200, message:'Error al Guardar los datos'})
            }
        }catch(err){
            res.status(500).json({success:true, status:500, message:'Añadido a Favoritos'})
        }

    },

     listFavorite: async (req, res) => {
        const {id_user} = req.body;
        try {
            const sql = `select mv.id_movi id_movi,mv.duracion duracion, mv.nombre as nombre, mv.imagen imagen
                                from favoritos as fv
                                         join movi mv on fv.movi_id = mv.id_movi
                                where fv.user_id = ${id_user}`;
           const query = await sequelize.query(sql);
            console.log(query)
            console.log(id_user)
            res.status(200).json({success:true, data:query, message:'lista'})
        } catch (err) {
            res.status(500).json({success: false, error: err})
        }
    }

}
