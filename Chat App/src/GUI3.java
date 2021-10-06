import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.*;
import java.net.Socket;

public class GUI3 extends JFrame implements ActionListener
{
    private ObjectOutputStream output;
    private ObjectInputStream input;
    private String message="";
    private Socket socket;
    private JButton Back,Send;
    private JTextField t2;
    private JTextArea A3;

    public GUI3(){
        Back=new JButton("Back");
        Send=new JButton("Send");
        t2=new JTextField();
        A3=new JTextArea();

        Back.setBounds(10,20,100,30);
        Send.setBounds(450, 500, 100, 30);
        t2.setBounds(100,500,300,30);
        A3.setBounds(5,50,595,440);

        Back.addActionListener(this);
        Send.addActionListener(this);

        add(Back);
        add(Send);
        add(t2);
        add(A3);
        setLayout(null);
        A3.setEditable(false);
        setVisible(true);
        setResizable(false);
        setTitle("Harshil");
        setSize(600,600);
        setLocation(1000,200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    @Override
    public void actionPerformed(ActionEvent e) {

        String Buttonclicked=e.getActionCommand();
        if (Buttonclicked.equals("Back")){
            setVisible(false);
            App_GUI app=new App_GUI(1000,200);
        }
        else{
            send(t2.getText());
            t2.setText("");
        }
    }
    void Connection()
    {
        try
        {
            try
            {
                socket = new Socket("localhost",1111);
            }catch(IOException ex)
            {
                ex.printStackTrace();
            }


            output = new ObjectOutputStream(socket.getOutputStream());
            output.flush();
            input = new ObjectInputStream(socket.getInputStream());

            mssgrecieved();
        }
        catch(IOException ex)
        {
            ex.printStackTrace();
        }
    }
    private void mssgrecieved() throws IOException
    {
        do{
            try
            {
                message = (String) input.readObject();
                A3.append(message+"\n");

            }
            catch(ClassNotFoundException ex)
            {
                ex.printStackTrace();
            }
        }while(!message.equals("Bye"));
    }
    private void send(String message)
    {
        try
        {
            output.writeObject("Harshil - " + message);
            output.flush();
            A3.append("Harshil - "+message+"\n");
        }
        catch(IOException ex)
        {
            ex.printStackTrace();
        }
    }

}


