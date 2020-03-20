import java.util.LinkedList;

class test {
    public static void main(String[] args) {
        int i = 323;
        String j = new String();
        j = "hello world";
        myLinkList list = new myLinkList();
        list.value = 9;
        list.type = "myworld";
        int result = count(0, 4);
        System.out.print(result);    
    }

    public static class myLinkList {
        int value;
        String type = new String();
    }

    public static int count(int current, int floor){
        if (current == floor) {
            return 1;
        }
        if (current > floor) {
            return 0;
        }
        return count( current + 1, floor) + count(current + 2, floor);
    }
}

