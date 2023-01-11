import { pool } from "../db.js";

export const getTaks = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM taks ORDER BY createAt ASC");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getTak = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM taks WHERE id = ?", [req.params.id]);
        if (result.length === 0) return res.status(404).json({ message: "Task not found" });
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createTaks = async (req, res) => {
    try {
        const { title, description } = req.body;
        const [result] = await pool.query("INSERT INTO taks(title, description) VALUES (?, ?)", [title, description]);
        res.send({
            id: result.insertId,
            title,
            description,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateTaks = async (req, res) => {
    try {
        const result = await pool.query("UPDATE taks SET ? WHERE id = ?", [req.body, req.params.id]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteTaks = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM taks WHERE id = ?", [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: "Task not found" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}