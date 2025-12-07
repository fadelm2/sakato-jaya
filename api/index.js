import express from "express";
import cors from "cors";

const app = express();
const allowedOrigins = [
    "http://192.168.1.70:3000",
    "https://api.sakatojaya.shop",
];

app.use(cors({
    origin: function (origin, callback) {
        // Boleh tanpa origin (misal Postman)
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            return callback(new Error("Not allowed by CORS"));
        }
    }
}));

app.use(express.json());

// === ROUTE: CREATE ORDER ===
app.post("/orders", (req, res) => {
    try {
        const order = req.body;

        // Validasi dasar
        if (!order.customer_name || !order.phone || !order.items || order.items.length === 0) {
            return res.status(400).json({ message: "Data pesanan tidak lengkap" });
        }

        // Simulasi simpan data (misalnya ke DB)
        console.log("=== ORDER MASUK ===");
        console.log(order);

        return res.status(201).json({
            message: "Order berhasil dibuat",
            order_id: Date.now(), // contoh dummy ID
        });

    } catch (error) {
        console.error("Error backend:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// === START SERVER ===
const PORT = process.env.PORT || 8776;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
