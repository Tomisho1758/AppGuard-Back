import { RequestHandler } from "express";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";
import { Activity } from "../../../models/activity/activity";

//Ruta de detalle del Mangrullo
export const searchIdMangrullo: RequestHandler = async (req, res) => {
  try {
    const id: string = req.params.id;
    //mangrullo esta definodo como un objeto de mangrullo.
    const mangrullo: Mangrullo | null = await Mangrullo.findByPk(id, {
      include: {
        model: Activity,
        through: {
          attributes: []
        }
      }
    });

    if (mangrullo) return res.status(201).json(mangrullo);

    return res.status(201).json({ message: "El Mangrullo no existe en la Base de datos" });
  } catch (error: any) {
    return res.status(500).json({ message: "Algo salió mal, verifica la función", error: error.message });
  }
}
// attributes: ['userName', 'description', 'calificacion', 'price', 'state', 'type'],