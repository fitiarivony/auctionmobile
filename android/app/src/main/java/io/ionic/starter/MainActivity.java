package io.ionic.starter;

import android.Manifest;
import android.annotation.SuppressLint;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;

import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import android.util.Log;
import android.widget.Toast;

import com.getcapacitor.BridgeActivity;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.RemoteMessage;

import java.util.concurrent.atomic.AtomicInteger;

@SuppressLint("MissingPermission")
public class MainActivity extends BridgeActivity {

    private static final String TAG = "MainActivity";
    private static final int NOTIFICATION_REQUEST_CODE = 1234;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        subscribeTopics();
        // [START handle_data_extras]
        if (getIntent().getExtras() != null) {
            for (String key : getIntent().getExtras().keySet()) {
                Object value = getIntent().getExtras().get(key);
                Log.d(TAG, "Key: " + key + " Value: " + value);
            }
        }
//        Intent intent = new Intent(this, MainActivity.class);
//        intent.setAction("android.intent.action.MAIN");
//        intent.addCategory("android.intent.category.LAUNCHER");
//        startActivity(intent);
        // [END handle_data_extras]
//        logRegToken();
//        MyFirebaseMessagingService service =new MyFirebaseMessagingService();
//        service.sendNotification(this,"Enchere Over","lkjhgfkjhgfkjhgf kjhgfkjhgflkjhgfd jhgfdskjhgf");
    }

    public void runtimeEnableAutoInit() {
        // [START fcm_runtime_enable_auto_init]
        FirebaseMessaging.getInstance().setAutoInitEnabled(true);
        // [END fcm_runtime_enable_auto_init]
    }

    public void deviceGroupUpstream() {
        // [START fcm_device_group_upstream]
        String to = "a_unique_key"; // the notification key
        AtomicInteger msgId = new AtomicInteger();
        FirebaseMessaging.getInstance().send(new RemoteMessage.Builder(to)
                .setMessageId(String.valueOf(msgId.get()))
                .addData("hello", "world")
                .build());
        // [END fcm_device_group_upstream]
    }

    public void sendUpstream() {
        final String SENDER_ID = "YOUR_SENDER_ID";
        final int messageId = 0; // Increment for each
        // [START fcm_send_upstream]
        FirebaseMessaging fm = FirebaseMessaging.getInstance();
        fm.send(new RemoteMessage.Builder(SENDER_ID + "@fcm.googleapis.com")
                .setMessageId(Integer.toString(messageId))
                .addData("my_message", "Hello World")
                .addData("my_action","SAY_HELLO")
                .build());
        // [END fcm_send_upstream]
    }

    private void subscribeTopics() {
        // [START subscribe_topics]
        FirebaseMessaging.getInstance().subscribeToTopic("over")
                .addOnCompleteListener(new OnCompleteListener<Void>() {
                    @Override
                    public void onComplete(@NonNull Task<Void> task) {
                        String msg = "Subscribed";
                        if (!task.isSuccessful()) {
                            msg = "Subscribe failed";
                        }
                        Log.d(TAG, msg);
                        Toast.makeText(MainActivity.this, msg, Toast.LENGTH_SHORT).show();
                    }
                });
        // [END subscribe_topics]
    }

    private void logRegToken() {
        // [START log_reg_token]
        FirebaseMessaging.getInstance().getToken()
                .addOnCompleteListener(new OnCompleteListener<String>() {
                    @Override
                    public void onComplete(@NonNull Task<String> task) {
                        if (!task.isSuccessful()) {
                            Log.w(TAG, "Fetching FCM registration token failed", task.getException());
                            return;
                        }

                        // Get new FCM registration token
                        String token = task.getResult();

                        // Log and toast
                        String msg = "FCM Registration token: " + token;
                        Log.d(TAG, msg);
                        Toast.makeText(MainActivity.this, msg, Toast.LENGTH_SHORT).show();
                    }
                });
        // [END log_reg_token]
    }

    // [START ask_post_notifications]
    // Declare the launcher at the top of your Activity/Fragment:
    private final ActivityResultLauncher<String> requestPermissionLauncher =
            registerForActivityResult(new ActivityResultContracts.RequestPermission(), isGranted -> {
                if (isGranted) {
                    // FCM SDK (and your app) can post notifications.
                } else {
                    // TODO: Inform user that that your app will not show notifications.
                }
            });


    // [END ask_post_notifications]
}