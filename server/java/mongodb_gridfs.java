import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.Arrays;
import java.util.Scanner;

import com.mongodb.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.DB;
import com.mongodb.client.gridfs.*;
import com.mongodb.client.gridfs.GridFSBucket;
import com.mongodb.client.gridfs.GridFSBuckets;
import com.mongodb.client.gridfs.GridFSDownloadStream;
import com.mongodb.client.gridfs.GridFSUploadStream;
import com.mongodb.client.gridfs.model.GridFSFile;
import com.mongodb.client.gridfs.model.GridFSUploadOptions;
import com.mongodb.gridfs.GridFS;
import com.mongodb.gridfs.GridFSInputFile;
import com.mongodb.DBCollection;


import org.bson.Document;
import org.bson.types.ObjectId;

public class mongodb_gridfs {
    public static void main(String[] args) throws IOException {

        //Creating a Mongo client, connect to mongoDB
        MongoClient mongoClient = new MongoClient("localhost", 27017);
        System.out.println("Connect to the database successfully");

        //Access the database. A new database will be created if not exist
        MongoDatabase database = mongoClient.getDatabase("eightk_db");
        //Create the Gridfs bucket to contain two collection
        GridFSBucket gridFSBucket = GridFSBuckets.create(database, "eightk_bucket");

        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter you option (1:upload 2:read 3:display):");
        int input = scanner.nextInt();
        if (input == 1) {
            //write data to chunks collection
//            try {
//                GridFSUploadOptions options = new GridFSUploadOptions()
//                        .chunkSizeBytes(358400)
//                        .metadata(new Document("type", "eightk_main"));
//
//                GridFSUploadStream uploadStream = gridFSBucket.openUploadStream("subset1", options);
//                byte[] data = Files.readAllBytes(new File("C:\\Users\\fqfx3\\Display\\eightk_main_subset1\\eightk_main_subset1.json").toPath());
//
//                uploadStream.write(data);
//                uploadStream.close();
//                System.out.println("The fileId of the uploaded file is: " + uploadStream.getObjectId().toHexString());
//
//            } catch (IOException e) {
//
//            }
            // Get the input stream
            try {
                InputStream streamToUploadFrom = new FileInputStream(new File("C:\\Users\\fqfx3\\Display\\eightk_main_subset1\\eightk_main_subset1.json"));
                // Create some custom options
                GridFSUploadOptions options = new GridFSUploadOptions()
                        .chunkSizeBytes(358400)
                        .metadata(new Document("type", "eightk_main"));

                ObjectId fileId = gridFSBucket.uploadFromStream("eightk_main_subset1", streamToUploadFrom, options);
            } catch (FileNotFoundException e){
                // handle exception
            }
        } else if (input == 2) {
            gridFSBucket.find().forEach(
                    new Block<GridFSFile>() {
                        @Override
                        public void apply(GridFSFile gridFSFile) {
                            System.out.println(gridFSFile.getFilename());
                        }
                    }
            );
        } else if (input == 3){
            ObjectId fileId = new ObjectId("5dd74be9abc98e3f5c61f818"); //The id of a file uploaded to GridFS, initialize to valid file id

            try {
                FileOutputStream streamToDownloadTo = new FileOutputStream("/tmp/mongodb-tutorial.pdf");
                gridFSBucket.downloadToStream(fileId, streamToDownloadTo);
                streamToDownloadTo.close();
                System.out.println(streamToDownloadTo.toString());
            } catch (IOException e) {
                // handle exception
                System.out.println("error");
            }
        }
        else {
            System.out.println("invalid value");
        }
    }


    //check collection exists
//    private static boolean collectionExists(final MongoDatabase database, final String collectionName) {
//        return database.listCollections().filter(new Document("name", collectionName)).first() != null;
//    }
    //        //Access the collection
//        DBCollection collection = database.getCollection("eight_collection");
//
//        //declear the file
//        File file = new File("C:\\Users\\fqfx3\\Display\\eightk_main_subset1\\eightk_main_subset1.json");
//
//        //Store the file to mongoDB by Gridfs
//        GridFS gridfs = new GridFS(database, "eightk_bucket");
//        GridFSInputFile gfsFile = gridfs.createFile(file);
//        gfsFile.setFilename("eightk_gridfs");
//        gfsFile.save();
}
