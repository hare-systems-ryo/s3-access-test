# S3 Access Test

Comparison of connection speeds using a combination of "Vercel" and the S3-compatible service "Wasabi"


## S3 (Wasabi)

1. Generate a secret key and an access key  
1. Create a bucket for the region you want to check  
1. Upload the following images to each bucket  
    * **area-img.jpg** 
      * Images that evoke the area where the buckets are installed
    * **test-image.jpg**
      * Test image with large file size



## Setup（Local PC）
1. Rename the file ".env.example" to ".env" 
1. Set the value for “.env”.
2. Command
    ```bash
    npm install
    npm run dev
    ```

