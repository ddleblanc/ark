const aws = require('aws-sdk');

const spacesEndpoint = new aws.Endpoint('sfo2.digitaloceanspaces.com');
const s3 = new aws.S3({
    endpoint: spacesEndpoint
});

module.exports = {
    spacesEndpoint: spacesEndpoint,
    s3: s3
};