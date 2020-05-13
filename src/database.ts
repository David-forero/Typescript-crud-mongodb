import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/ts-crud', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database is connect')
    } catch {
        console.log('error');
    }
}

export default connect;