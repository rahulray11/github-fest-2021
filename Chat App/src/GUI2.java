import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class GUI2 extends JFrame implements ActionListener {
    private ObjectOutputStream output;
    private ObjectInputStream input;
    private ServerSocket serverSocket;
    private JTextField t2;
    private JTextArea A2;
    private String message="";

    GUI2() throws IOException {

        JButton back = new JButton("Back");
        JButton send = new JButton("Send");
        t2 = new JTextField();
        A2 = new JTextArea();

        back.setBounds(10, 20, 100, 30);
        send.setBounds(450, 500, 100, 30);
        t2.setBounds(100, 500, 300, 30);
        A2.setBounds(5, 50, 595, 440);

        back.addActionListener(this);
        send.addActionListener(this);


        add(back);
        add(send);
        add(t2);
        add(A2);
        A2.setEditable(false);
        setLayout(null);
        setVisible(true);
        setTitle("Siddhant");
        setResizable(false);
        setSize(600, 600);
        setLocation(200, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        String Buttonclicked = e.getActionCommand();
        if (Buttonclicked.equals("Back")) {
            setVisible(false);
            new App_GUI(200, 200);
        } else {
            send(t2.getText());
            t2.setText("");
        }
    }
    void Connection()
    {
        try
        {
             serverSocket = new ServerSocket(1111);
            while(true)
            {
                try
                {

                    Socket connection = serverSocket.accept();
                    output = new ObjectOutputStream(connection.getOutputStream());
                    output.flush();
                    input = new ObjectInputStream(connection.getInputStream());

                    mssgrecieved();

                }catch(EOFException ex)
                {
                    ex.printStackTrace();
                }
            }
        }
        catch(IOException ioException)
        {
            ioException.printStackTrace();
        }
    }
    private void mssgrecieved() throws IOException
    {
        do{
            try
            {
                message = (String) input.readObject();
                A2.append(message+"\n");

            }catch(ClassNotFoundException ex)
            {
                ex.printStackTrace();
            }
        }while(!message.equals("Bye"));
    }
    private void send(String message)
    {
        try
        {
            output.writeObject("Siddhant - " + message);
            output.flush();
            A2.append("Siddhant - "+message+"\n");

        }
        catch(IOException ex)
        {
            ex.printStackTrace();
        }
    }
}