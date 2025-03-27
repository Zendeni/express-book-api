import express from 'express'
import booksRouter from './routes/books.js'
import recordsRouter from './routes/records.js'
import loginRouter from './routes/login.js';
import log from './middleware/logMiddleware.js'
import 'dotenv/config';

// import * as Sentry from '@sentry/node';
// import { createRequire } from 'module';

// const require = createRequire(import.meta.url);
// const tracing = require('@sentry/tracing');
// const { Http, Express } = tracing.Integrations;


import errorHandler from './middleware/errorHandler.js';

const app = express()

// Sentry.init({
//     dsn: "https://640f51f44c6adac8044c72da80821e51@o4508043385241600.ingest.de.sentry.io/4508043399135312",
//     integrations: [
//         Http({ tracing: true }),
//         new Express({ app }),
//       // Automatically instrument Node.js libraries and frameworks
//       ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
//     ],
  
//     // Set tracesSampleRate to 1.0 to capture 100%
//     // of transactions for performance monitoring.
//     // We recommend adjusting this value in production
//     tracesSampleRate: 1.0,
//   });

// // RequestHandler creates a separate execution context, so that all
// // transactions/spans/breadcrumbs are isolated across requests
// app.use(Sentry.Handlers.requestHandler());
// // TracingHandler creates a trace for every incoming request
// app.use(Sentry.Handlers.tracingHandler());


app.use(express.json())

app.use(log)

app.use('/records', recordsRouter);
app.use('/books', booksRouter)
app.use('/login', loginRouter);


app.get('/about', (req, res) => {
    const html = '<h1>About Us</h1><p>Welcome to our website!</p>';
    res.send(html);
  }); 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.use(Sentry.Handlers.errorHandler());

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
