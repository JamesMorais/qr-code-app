import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';
import * as Clipboard from 'expo-clipboard'; // Importando o Clipboard

export default function SavedLinksPage() {
    const [listaDeLinks, setListaDeLinks] = useState([]);
    const [textInputName, setTextInputName] = useState("");

    // Função para adicionar novo link no banco de dados
    async function addNew() {
        if (!textInputName) {
            console.log('Campo vazio');
        } else {
            const db = await SQLite.openDatabaseAsync("databaseApp");

            // Insere novo link no banco de dados
            await db.runAsync(
                "INSERT INTO links (value) VALUES (?)",
                textInputName
            );
            // Atualiza a lista de links
            getList();
            // Limpa o campo de input
            setTextInputName("");
        }
    }

    async function removeList(item) {
        const db = await SQLite.openDatabaseAsync("databaseApp");

        // Deleta o item do banco de dados
        await db.runAsync('DELETE FROM links WHERE value = $value', { $value: item });

        // Atualiza a lista
        getList();
    }

    // Função para copiar texto para a área de transferência
    async function copyToClipboard(text) {
        await Clipboard.setStringAsync(text);
        alert('Texto copiado para a área de transferência!');
    }

    // Função para buscar a lista de links do banco de dados
    async function getList() {
        const db = await SQLite.openDatabaseAsync("databaseApp");

        // Busca todos os links no banco de dados
        const allRows = await db.getAllAsync("SELECT * FROM links");
        let newArray = [];

        // Popula o array com os dados da tabela
        for (const row of allRows) {
            console.log(row.id, row.value);
            // Cria o objeto que contém o campo productName
            newArray.push({ prodcutName: row.value });
        }

        // Atualiza a lista de links no estado
        setListaDeLinks(newArray);
    }

    // useEffect para configurar o banco de dados ao inicializar o app
    useEffect(() => {
        async function setUp() {
            const db = await SQLite.openDatabaseAsync("databaseApp");

            // Configura o banco de dados e cria a tabela, caso não exista
            await db.execAsync(`
                PRAGMA journal_mode = WAL;
                CREATE TABLE IF NOT EXISTS links (
                    id INTEGER PRIMARY KEY NOT NULL, 
                    value TEXT NOT NULL
                );
            `);

            // Carrega a lista inicial de links
            getList();
        }

        setUp();
    }, []);

    return (
        <View style={styles.container}>
            {/* Entrada de link */}
            <Text style={{fontSize: 20}}>Link:</Text>
            <TextInput
                value={textInputName}
                style={styles.input}
                placeholder="Cole o link aqui..."
                onChangeText={setTextInputName}
            />
    
            {/* Botão de adicionar */}
            <TouchableOpacity onPress={addNew} style={[styles.buttons, { backgroundColor: '#007BFF' }]}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
    
            {/* Renderização da lista de links com FlatList */}
            <View style={styles.containerList}>
                <FlatList
                    data={listaDeLinks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.containerList}>
                            <View style={{ gap: 5 }}>
                                <Text style={{ fontWeight: 'bold' }}>Link Salvo:</Text>
                                <Text>{item.prodcutName}</Text>
                            </View>
                            <View>
                                {/* Botão para copiar o texto */}
                                <TouchableOpacity onPress={() => copyToClipboard(item.prodcutName)} style={[styles.buttons, { backgroundColor: '#353238' }]}>
                                    <Text style={styles.buttonText}>Copy</Text>
                                </TouchableOpacity>
                                {/* Botão de remover */}
                                <TouchableOpacity onPress={() => removeList(item.prodcutName)} style={[styles.buttons, { backgroundColor:  '#EF798A' }]}>
                                    <Text style={styles.buttonText}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }} // Faz a lista ocupar todo o espaço disponível
                />
            </View>
    
            <StatusBar style="auto" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '10%', 
        backgroundColor: '#F9F5FF', 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        gap: 10, 
    },
    input: {
        textAlign: 'center', 
        height: 40, 
        width: '80%', 
        borderWidth: 1, 
        borderColor: '#999', 
        padding: 10, 
        marginBottom: 20, 
        borderRadius: 5, 
    },
    containerList: {
        borderWidth: 1, 
        borderColor: '#ddd', 
        width: '90%', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 10, 
        borderBottomWidth: 1, 
        borderBottomColor: '#ddd', 
        marginBottom: 10, 
        borderRadius: 10, 
    },
    buttons: {
        backgroundColor: '#007BFF', 
        padding: 10, 
        borderRadius: 5,
        alignItems: 'center', 
        marginTop: 10, 
        width: 100, 
    },
    buttonText: {
        color: 'white',
        fontSize: 16, 
        textAlign: 'center', 
    },
});

