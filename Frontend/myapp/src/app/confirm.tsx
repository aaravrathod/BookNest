import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

export default function ConfirmScreen() {
  
    const { email } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.emoji}>📬</Text>
                <Text style={styles.title}>Check your email</Text>
                <Text style={styles.subtitle}>
                    We've sent a confirmation link to{'\n'}
                    <Text style={styles.emailText}>{email || 'your email address'}</Text>.
                </Text>
                <Text style={styles.instruction}>
                    Click the link inside the email to verify your account, then come back here to log in.
                </Text>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => router.replace('/')}
                >
                    <Text style={styles.buttonText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#f5f5f7',
    },
    card: {
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 12,
        width: '100%',
        maxWidth: 400,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    emoji: {
        fontSize: 48,
        marginBottom: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 16,
        lineHeight: 20,
    },
    emailText: {
        fontWeight: 'bold',
        color: '#007AFF',
    },
    instruction: {
        fontSize: 13,
        color: '#888',
        textAlign: 'center',
        marginBottom: 24,
        lineHeight: 18,
    },
    button: {
        width: '100%',
        height: 42,
        backgroundColor: '#007AFF',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
});